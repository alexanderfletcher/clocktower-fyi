import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import * as prettier from "prettier";
import * as plugins from "prettier/plugins/postcss";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
type Props = {
  imageUrl: string;
  character: string;
};

const formatCSS = async (css: string) => {
  return prettier.format(css, {
    parser: "css",
    plugins: [plugins],
  });
};

const generateCSS = (url: string, character: string) => {
  return `.${character} > span.icon { 
    background-image: url("${url}") !important;
  }`;
};

export function Generated({ imageUrl, character }: Props) {
  const [generatedCSS, setGeneratedCSS] = useState<string>();

  useEffect(() => {
    formatCSS(generateCSS(imageUrl, character)).then((css) =>
      setGeneratedCSS(css)
    );
  }, [imageUrl, character]);

  const copyText = () => {
    navigator.clipboard.writeText(generatedCSS || "");
  };

  if (!imageUrl || !character) return;

  return (
    <Card className="w-2/3">
      <CardHeader>
        <CardDescription>
          Copy the following into your custom css to overide the token
          <Button className="float-right size-sm" onClick={copyText}>
            Copy
          </Button>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <pre className="overflow-auto">{generatedCSS}</pre>
      </CardContent>
    </Card>
  );
}

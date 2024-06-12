// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export const runtime = "edge";
import { withAxiom, AxiomAPIRequest } from "next-axiom";
import { NextResponse } from "next/server";

const handler = (req: AxiomAPIRequest, res: NextResponse) => {
  req.log.info("CUSTOM_TOKEN_GENERATED");
  return new Response();
};

export default withAxiom(handler);
export const config = {
  api: {
    bodyParser: "500kb",
  },
};

import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  return NextResponse.json({ message: "Hello!" });
};

export const POST = async (req: Request, res: Response) => {
  const body = await req.json();

  return NextResponse.json({ body });
};

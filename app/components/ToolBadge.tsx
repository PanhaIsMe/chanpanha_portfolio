import Image from "next/image";
import { technologyByName } from "../data/technology";

export function ToolMark({ name, size = 22 }: { name: string; size?: number }) {
  const technology = technologyByName[name];
  if (!technology) return null;
  return <Image src={`/technology/${technology.asset}.svg`} alt="" aria-hidden="true" width={size} height={size} className="tool-mark" unoptimized />;
}

export default function ToolBadge({ name }: { name: string }) {
  return <span className="tool-badge"><ToolMark name={name} /><span>{name}</span></span>;
}

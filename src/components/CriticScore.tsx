import { Badge } from "@chakra-ui/react/badge";

interface Props {
  criticScore: number;
}
const CriticScore = ({ criticScore }: Props) => {
  const color = criticScore > 80 ? "green" : criticScore < 80 ? "yellow" : "";
  return (
    <Badge fontSize={14} paddingX={3} colorPalette={color}>
      {criticScore}
    </Badge>
  );
};

export default CriticScore;

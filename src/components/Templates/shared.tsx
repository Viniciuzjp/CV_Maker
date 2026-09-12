import { Flex, Text } from "@av-digital/components";

export function SectionTitle({
  children,
  color,
  accentColor,
}: {
  children: React.ReactNode;
  color: string;
  accentColor: string;
}) {
  return (
    <Flex gap="xs" align="center" className="topic-marker cv-section-title">
      <span style={{ backgroundColor: accentColor }} className="cv-marker" />
      <Text variant="subtitle" size="sm" weight="bold">
        <span style={{ color }}>{children}</span>
      </Text>
    </Flex>
  );
}

export function BulletList({ text }: { text: string }) {
  return (
    <ul className="cv-bullet-list">
      {text.split("\n").map((item, index) => (
        <li key={index}>
          <Flex gap="xs" align="center" className="topic-marker">
            <Text variant="caption" size="xs">•</Text>
            <Text variant="caption" size="xs">{item}</Text>
          </Flex>
        </li>
      ))}
    </ul>
  );
}

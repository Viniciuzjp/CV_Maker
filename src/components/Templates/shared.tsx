import { Flex, Stack, Text } from "@av-digital/components";
import type { ExperienceEntry, ProjectEntry } from "@/app/hooks/useResumeContext";

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

export function MinimalSectionTitle({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  return (
    <Stack gap="xs" classname="topic-marker">
      <Text variant="subtitle" size="sm" weight="bold">
        <span className="cv-minimal-title" style={{ color }}>
          {children}
        </span>
      </Text>
      <span className="cv-minimal-rule" style={{ backgroundColor: color }} />
    </Stack>
  );
}

export function hasExperienceContent(experiences: ExperienceEntry[]) {
  return experiences.some((item) => item.title || item.date || item.description);
}

export function ExperienceList({ experiences }: { experiences: ExperienceEntry[] }) {
  return (
    <>
      {experiences.map(
        (item) =>
          (item.title || item.date || item.description) && (
            <Stack key={item.id} gap="xs">
              {(item.title || item.date) && (
                <Flex justify="between">
                  <Text variant="caption" size="xs">{item.title}</Text>
                  <Text variant="caption" size="xs">{item.date}</Text>
                </Flex>
              )}
              {item.description && <BulletList text={item.description} />}
            </Stack>
          ),
      )}
    </>
  );
}

export function hasProjectsContent(projects: ProjectEntry[]) {
  return projects.some((item) => item.text);
}

export function ProjectsList({ projects }: { projects: ProjectEntry[] }) {
  return (
    <ul className="cv-bullet-list">
      {projects
        .filter((item) => item.text)
        .map((item) => (
          <li key={item.id}>
            <Text variant="caption" size="xs">{item.text}</Text>
          </li>
        ))}
    </ul>
  );
}

export function SkillTags({ text, color }: { text: string; color: string }) {
  return (
    <Flex gap="xs" wrap className="topic-marker">
      {text
        .split("\n")
        .filter(Boolean)
        .map((item, index) => (
          <span
            key={index}
            className="cv-skill-tag"
            style={{ color, borderColor: color }}
          >
            {item}
          </span>
        ))}
    </Flex>
  );
}

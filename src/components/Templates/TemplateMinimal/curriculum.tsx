import { useResume } from "@/app/hooks/useResumeContext";
import { Card, Flex, Stack, Text } from "@av-digital/components";
import {
  BulletList,
  MinimalSectionTitle,
  ExperienceList,
  hasExperienceContent,
  ProjectsList,
  hasProjectsContent,
} from "../shared";

export default function TemplateMinimal() {
  const {
    resume,
    RenderEmail,
    renderLocation,
    renderPhone,
    renderLinkedin,
    renderGithub,
  } = useResume();

  return (
    <div
      id="cv"
      style={{
        fontFamily: resume.fontFamily,
        fontSize: resume.fontSize,
        margin: "1.75rem auto 0",
        width: "min(33.59rem, 100%)",
        aspectRatio: "210 / 297",
        display: "flex",
        flexDirection: "column",
        ...(resume.fontFamily ? { "--av-font-family": resume.fontFamily } : {}),
        ...(resume.fontSize
          ? {
              "--av-text-xs": resume.fontSize,
              "--av-text-sm": resume.fontSize,
              "--av-text-lg": resume.fontSize,
            }
          : {}),
      } as React.CSSProperties}
    >
      <Card spacing="lg" className="cv-content-full">
        <Stack gap="lg">
          <Flex direction="column" align="center" gap="sm" className="cv-header">
            <Text variant="title" size="lg" weight="bold">
              <span style={{ color: resume.colorText }}>{resume.name}</span>
            </Text>

            <Flex justify="center" align="center" wrap gap="sm">
              <Flex gap="xs" align="center">
                {renderLocation()}
                <Text variant="caption" size="xs">{resume.address}</Text>
              </Flex>
              <Flex gap="xs" align="center">
                {RenderEmail()}
                <Text variant="caption" size="xs">{resume.email}</Text>
              </Flex>
              <Flex gap="xs" align="center">
                {renderPhone()}
                <Text variant="caption" size="xs">{resume.telephone}</Text>
              </Flex>
              <Flex gap="xs" align="center">
                {renderLinkedin()}
                <Text variant="caption" size="xs">{resume.linkedin}</Text>
              </Flex>
              <Flex gap="xs" align="center">
                {renderGithub()}
                <Text variant="caption" size="xs">{resume.github}</Text>
              </Flex>
            </Flex>
          </Flex>

          <Stack gap="sm">
            {resume.objective && (
              <>
                <MinimalSectionTitle color={resume.colorText}>
                  Objective
                </MinimalSectionTitle>
                <Text variant="caption" size="xs">{resume.objective}</Text>
              </>
            )}

            {hasExperienceContent(resume.experiences) && (
              <>
                <MinimalSectionTitle color={resume.colorText}>
                  Experience
                </MinimalSectionTitle>
                <ExperienceList experiences={resume.experiences} />
              </>
            )}

            <div id="containerEdu">
              <Stack gap="sm">
                {resume.education && (
                  <>
                    <MinimalSectionTitle color={resume.colorText}>
                      Education
                    </MinimalSectionTitle>
                    <Text variant="caption" size="xs">{resume.education}</Text>
                  </>
                )}

                {resume.skills && (
                  <>
                    <MinimalSectionTitle color={resume.colorText}>
                      Skills
                    </MinimalSectionTitle>
                    <BulletList text={resume.skills} />
                  </>
                )}

                {resume.languages && (
                  <>
                    <MinimalSectionTitle color={resume.colorText}>
                      Languages
                    </MinimalSectionTitle>
                    <Text variant="caption" size="xs">{resume.languages}</Text>
                  </>
                )}

                {hasProjectsContent(resume.projects) && (
                  <>
                    <MinimalSectionTitle color={resume.colorText}>
                      Projects
                    </MinimalSectionTitle>
                    <ProjectsList projects={resume.projects} />
                  </>
                )}
              </Stack>
            </div>
          </Stack>
        </Stack>
      </Card>
    </div>
  );
}

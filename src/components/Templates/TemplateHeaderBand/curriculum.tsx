import { useResume } from "@/app/hooks/useResumeContext";
import { Card, Flex, Stack, Text } from "@av-digital/components";
import {
  BulletList,
  SectionTitle,
  ExperienceList,
  hasExperienceContent,
  ProjectsList,
  hasProjectsContent,
} from "../shared";

export default function TemplateHeaderBand() {
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
      <div className="cv-band" style={{ backgroundColor: resume.background }}>
        <Stack gap="sm">
          <Text variant="title" size="lg" weight="bold">
            <span style={{ color: "#fff" }}>{resume.name}</span>
          </Text>

          <Flex wrap gap="sm">
            <Flex gap="xs" align="center">
              {renderLocation()}
              <Text variant="caption" size="xs">
                <span style={{ color: "#fff" }}>{resume.address}</span>
              </Text>
            </Flex>
            <Flex gap="xs" align="center">
              {RenderEmail()}
              <Text variant="caption" size="xs">
                <span style={{ color: "#fff" }}>{resume.email}</span>
              </Text>
            </Flex>
            <Flex gap="xs" align="center">
              {renderPhone()}
              <Text variant="caption" size="xs">
                <span style={{ color: "#fff" }}>{resume.telephone}</span>
              </Text>
            </Flex>
            <Flex gap="xs" align="center">
              {renderLinkedin()}
              <Text variant="caption" size="xs">
                <span style={{ color: "#fff" }}>{resume.linkedin}</span>
              </Text>
            </Flex>
            <Flex gap="xs" align="center">
              {renderGithub()}
              <Text variant="caption" size="xs">
                <span style={{ color: "#fff" }}>{resume.github}</span>
              </Text>
            </Flex>
          </Flex>
        </Stack>
      </div>

      <Card spacing="lg" className="cv-content-full">
        <Stack gap="sm">
          {resume.objective && (
            <>
              <SectionTitle color={resume.colorText} accentColor={resume.background}>
                Objective
              </SectionTitle>
              <Text variant="caption" size="xs">{resume.objective}</Text>
            </>
          )}

          {hasExperienceContent(resume.experiences) && (
            <>
              <SectionTitle color={resume.colorText} accentColor={resume.background}>
                Experience
              </SectionTitle>
              <ExperienceList experiences={resume.experiences} />
            </>
          )}

          <Flex gap="lg" wrap>
            <Stack gap="sm">
              {resume.skills && (
                <>
                  <SectionTitle color={resume.colorText} accentColor={resume.background}>
                    Skills
                  </SectionTitle>
                  <BulletList text={resume.skills} />
                </>
              )}
            </Stack>
            <Stack gap="sm">
              {resume.languages && (
                <>
                  <SectionTitle color={resume.colorText} accentColor={resume.background}>
                    Languages
                  </SectionTitle>
                  <Text variant="caption" size="xs">{resume.languages}</Text>
                </>
              )}
            </Stack>
          </Flex>

          <div id="containerEdu">
            <Stack gap="sm">
              {resume.education && (
                <>
                  <SectionTitle color={resume.colorText} accentColor={resume.background}>
                    Education
                  </SectionTitle>
                  <Text variant="caption" size="xs">{resume.education}</Text>
                </>
              )}

              {hasProjectsContent(resume.projects) && (
                <>
                  <SectionTitle color={resume.colorText} accentColor={resume.background}>
                    Projects
                  </SectionTitle>
                  <ProjectsList projects={resume.projects} />
                </>
              )}
            </Stack>
          </div>
        </Stack>
      </Card>
    </div>
  );
}

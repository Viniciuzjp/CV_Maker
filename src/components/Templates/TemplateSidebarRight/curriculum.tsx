import { useResume } from "@/app/hooks/useResumeContext";
import { Card, Flex, Stack, Text } from "@av-digital/components";
import {
  BulletList,
  SectionTitle,
  SkillTags,
  ExperienceList,
  hasExperienceContent,
  ProjectsList,
  hasProjectsContent,
} from "../shared";

export default function TemplateSidebarRight() {
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
        flexDirection: "row",
        alignItems: "stretch",
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
      <Card spacing="lg" className="cv-content-main">
        <Stack gap="md">
          <Text variant="title" size="lg" weight="bold">
            <span style={{ color: resume.colorText }}>{resume.name}</span>
          </Text>

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

      <div
        className="cv-sidebar"
        style={{
          backgroundColor: resume.background,
          width: "35%",
        }}
      >
        <Stack gap="md">
          <Stack gap="sm">
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
          </Stack>

          {resume.skills && (
            <Stack gap="sm">
              <SectionTitle color="#fff" accentColor="#fff">
                Skills
              </SectionTitle>
              <SkillTags text={resume.skills} color="#fff" />
            </Stack>
          )}

          {resume.languages && (
            <Stack gap="sm">
              <SectionTitle color="#fff" accentColor="#fff">
                Languages
              </SectionTitle>
              <Text variant="caption" size="xs">
                <span style={{ color: "#fff" }}>{resume.languages}</span>
              </Text>
            </Stack>
          )}
        </Stack>
      </div>
    </div>
  );
}

import { useResume } from "@/app/hooks/useResumeContext";
import { Card, Flex, Stack, Text } from "@av-digital/components";
import { BulletList, SectionTitle } from "../shared";

export default function TemplateOneColumn() {
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
        position: "relative",
        top: "1.75rem",
        left: "50%",
        transform: "translateX(-50%)",
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
      <div
        id="lineCV"
        style={{
          backgroundColor: resume.background,
          width: "8px",
          margin: "0.25rem 0",
        }}
      />
      <Card spacing="lg" className="cv-content">
        <Stack gap="lg">
          <Stack gap="sm" classname="cv-header">
            <Text variant="title" size="lg" weight="bold">
              <span style={{ color: resume.colorText }}>{resume.name}</span>
            </Text>

            <Flex justify="between" wrap gap="sm">
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
          </Stack>

          <Stack gap="sm">
            {resume.objective && (
              <>
                <SectionTitle color={resume.colorText} accentColor={resume.background}>
                  Objective
                </SectionTitle>
                <Text variant="caption" size="xs">{resume.objective}</Text>
              </>
            )}

            {(resume.experience ||
              resume.experienceDate ||
              resume.experienceDescription ||
              resume.experience2 ||
              resume.experienceDate2 ||
              resume.experienceDescription2) && (
              <SectionTitle color={resume.colorText} accentColor={resume.background}>
                Experience
              </SectionTitle>
            )}
            {(resume.experience || resume.experienceDate) && (
              <Flex justify="between">
                <Text variant="caption" size="xs">{resume.experience}</Text>
                <Text variant="caption" size="xs">{resume.experienceDate}</Text>
              </Flex>
            )}
            {resume.experienceDescription && (
              <BulletList text={resume.experienceDescription} />
            )}

            {(resume.experience2 || resume.experienceDate2) && (
              <Flex justify="between">
                <Text variant="caption" size="xs">{resume.experience2}</Text>
                <Text variant="caption" size="xs">{resume.experienceDate2}</Text>
              </Flex>
            )}
            {resume.experienceDescription2 && (
              <BulletList text={resume.experienceDescription2} />
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

                {resume.skills && (
                  <>
                    <SectionTitle color={resume.colorText} accentColor={resume.background}>
                      Skills
                    </SectionTitle>
                    <BulletList text={resume.skills} />
                  </>
                )}

                {resume.languages && (
                  <>
                    <SectionTitle color={resume.colorText} accentColor={resume.background}>
                      Languages
                    </SectionTitle>
                    <Text variant="caption" size="xs">{resume.languages}</Text>
                  </>
                )}

                {resume.projects && (
                  <>
                    <SectionTitle color={resume.colorText} accentColor={resume.background}>
                      Projects
                    </SectionTitle>
                    <Text variant="caption" size="xs">{resume.projects}</Text>
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

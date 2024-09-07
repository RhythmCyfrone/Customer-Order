import { ArrowDropDown } from "@mui/icons-material/";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Icon,
  SvgIcon,
  Typography,
} from "@mui/material";

export default function MyAccordion({
  select,
  setSelect,
  title,
  titleIcon,
  children,
}: {
  select: boolean;
  setSelect: () => void;
  title: string;
  titleIcon: React.ElementType;
  children: { title: string; icon: React.ElementType }[];
}) {
  return (
    <Accordion
      sx={{
        m: 1,
        borderRadius: select ? 6 : 8,
      }}
      expanded={select}
      onChange={setSelect}
    >
      <AccordionSummary
        LinkComponent={Box}
        sx={{
          backgroundColor: select ? "#3B82F6" : "#EBF3FE",
          color: select ? "white" : "#3B82F6",
        }}
        expandIcon={<ArrowDropDown sx={{ color: "#3B82F6" }} />}
        id={`panel-${title}`}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Icon
            component={titleIcon}
            sx={{ color: select ? "white" : "3B82F6" }}
          />
          <Typography variant="inherit" ml={1}>
            {title}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        {children.map(
          (
            child: { title: string; icon: React.ElementType },
            index: number,
          ) => (
            <Box
              key={index}
              display={"flex"}
              alignItems={"center"}
              sx={{ p: 1, "&:hover": { backgroundColor: "#D1D5DB" } }}
            >
              <SvgIcon>
                <Icon component={child.icon} sx={{ color: "#3B82F6" }} />
              </SvgIcon>
              <Typography variant="inherit" ml={1.5} sx={{ color: "#3B82F6" }}>
                {child.title}
              </Typography>
            </Box>
          ),
        )}
      </AccordionDetails>
    </Accordion>
  );
}

import { Forecast } from "@/interfaces/forecast";
import { Tabs, Tab, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import Hours from "@/components/hours";

const Index = ({
  date2,
  date3,
  hours_forecast_date2,
  hours_forecast_date3,
}: Forecast) => {
  return (
    <>
      <Tabs variant="unstyled">
        <TabList>
          <Tab _selected={{ color: "white", bg: "blue.500" }}>{date2}</Tab>
          <Tab _selected={{ color: "white", bg: "green.400" }}>{date3}</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Hours hours_forecast={hours_forecast_date2} />
          </TabPanel>
          <TabPanel>
            <Hours hours_forecast={hours_forecast_date3} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Index;

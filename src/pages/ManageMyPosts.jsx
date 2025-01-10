import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Container from "../components/Container";
import MyVolunteerNeedPost from "../components/MyVolunteerNeedPost";
import MyVolunteerReqPost from "./../components/MyVolunteerReqPost";

const ManageMyPosts = () => {
  const { tab } = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Container>
      <div className="overflow-y-auto">
        <Tabs defaultIndex={parseInt(tab, 10)}>
          <div>
            <TabList>
              <Tab>
                <p className="text-lg whitespace-nowrap overflow-y-auto w-28 sm:w-auto">
                  My Volunteer Need Posts
                </p>
              </Tab>
              <Tab>
                <p className=" text-lg whitespace-nowrap overflow-y-auto w-28  sm:w-auto">
                  My Volunteer Request Post
                </p>
              </Tab>
            </TabList>
          </div>

          <TabPanel>
            <MyVolunteerNeedPost />
          </TabPanel>
          <TabPanel>
            <MyVolunteerReqPost />
          </TabPanel>
        </Tabs>
      </div>
    </Container>
  );
};

export default ManageMyPosts;

import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MyVolunteerNeedPost from "../components/MyVolunteerNeedPost";
import MyVolunteerReqPost from "./../components/MyVolunteerReqPost";

const ManageMyPosts = () => {
  const { tab } = useParams();
  return (
    <div className="w-10/12 mx-auto overflow-y-auto">
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
  );
};

export default ManageMyPosts;

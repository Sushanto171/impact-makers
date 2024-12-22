import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MyVolunteerNeedPost from "../components/MyVolunteerNeedPost";
import MyVolunteerReqPost from "./../components/MyVolunteerReqPost";

const ManageMyPosts = () => {
  return (
    <div className="w-10/12 mx-auto">
      <Tabs>
        <TabList>
          <Tab>
            <span className="text-lg">My Volunteer Need Posts</span>
          </Tab>
          <Tab>
            <span className=" text-lg">My Volunteer Request Post</span>
          </Tab>
        </TabList>

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

import React, { useState, SyntheticEvent, ReactNode } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AdminProductView from "./products";
import AdminUsersView from "./users";
import AdminOrderView from "./orders";
import { GetServerSideProps } from "next";
import DialogView from "./forms/dialog";

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const [productsRes, usersRes, ordersRes, authorRes, rolesRes] =
    await Promise.all([
      fetch("http://localhost:3000/api/products"),
      fetch("http://localhost:3000/api/users"),
      fetch("http://localhost:3000/api/orders"),
      fetch("http://localhost:3000/api/authors"),
      fetch("http://localhost:3000/api/roles"),
    ]);
  const [products, users, orders, authors, roles] = await Promise.all([
    productsRes.json(),
    usersRes.json(),
    ordersRes.json(),
    authorRes.json(),
    rolesRes.json(),
  ]);
  return { props: { products, users, orders, authors, roles } };
};

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 4 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const AdminTabs = ({ products, users, orders, authors, roles }: any) => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Products" {...a11yProps(0)} />
          <Tab label="Users" {...a11yProps(1)} />
          <Tab label="Orders" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <DialogView
          dialogTitle="Create Product"
          isProductRendered={true}
          authors={authors}
          roles={roles}
        />
        <AdminProductView bookList={products} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DialogView
          dialogTitle="Create User"
          roles={roles}
          authors={authors}
          isProductRendered={false}
        />
        <AdminUsersView userList={users} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AdminOrderView orderList={orders} />
      </TabPanel>
      {/* <TabPanel value={value} index={3}>
        <AdminAuthorView authorList={authors} />
      </TabPanel> */}
    </Box>
  );
};

export default AdminTabs;
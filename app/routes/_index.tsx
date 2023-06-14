import {  } from '@geist-ui/react';
import { Form, Input, Button } from "@geist-ui/react";
import type { SetStateAction} from "react";
import { useState } from "react";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // TODO: Implement the search functionality
    console.log("Search query:", searchQuery);
  };

  return (
    <div>
      <h1>Virtual Shopping Assistant</h1>
      <Form onSubmit={handleSearch}>
        <Form.Item label="Search">
          <Input
            value={searchQuery}
            onChange={(event: { target: { value: SetStateAction<string>; }; }) => setSearchQuery(event.target.value)}
            placeholder="Search for products"
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="success">
            Search
          </Button>
        </Form.Item>
      </Form>
      <div>
        <h2>Product Recommendations</h2>
        {/* TODO: Display product recommendations here */}
      </div>
    </div>
  );
}
 
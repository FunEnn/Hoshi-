import React from "react";
import { action } from "@storybook/addon-actions";
import { AutoComplete, DataSourceType } from "./autoComplete";

export default {
  title: "AutoComplete",
  component: AutoComplete,
};

interface LakerPlayProps {
  value: string;
  number: number;
}

interface GithubUserProps {
  login: string;
  avatar_url: string;
  url: string;
}
export const SimpleComplete = () => {
  const lakers = [
    "bradley beal",
    "stephen curry",
    "lebron james",
    "kevin durant",
  ];
  const lakersNumber = [
    {
      value: "lakers",
      number: 17,
    },
    {
      value: "warriors",
      number: 30,
    },
    {
      value: "bulls",
      number: 23,
    },
  ];
  // const handleFetch = (query: string) => {
  //   return lakers.filter(item => item.includes(query)).map((item) => ({ value: item }));
  // };
  //   const handleFetch = (query: string) => {
  //     return lakersNumber.filter((item) => item.value.includes(query));
  //   };
  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then((res) => res.json())
      .then(({ items }) => {
        return items.slice(0, 10).map((item: any) => ({
          value: item.login,
          ...item,
        }));
      });
  };

  const renderOption = (item: DataSourceType<GithubUserProps>) => {
    return (
      <>
        <p>Name: {item.login}</p>
        {/* <p>Number: {item.url}</p> */}
      </>
    );
  };
  return (
    <AutoComplete
      fetchSuggestions={handleFetch}
      onSelect={action("selected")}
      renderOption={renderOption}
    />
  );
};

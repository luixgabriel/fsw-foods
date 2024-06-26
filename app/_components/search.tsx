import React from "react";
import { Input } from "../_components/ui/input";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="flex gap-4">
      <Input placeholder="Buscar restaurantes" className="border-none" />
      <Button size="icon">
        <SearchIcon size={20} />
      </Button>
    </div>
  );
};

export default Search;

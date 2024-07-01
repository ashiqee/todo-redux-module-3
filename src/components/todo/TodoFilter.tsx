"use client"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"




const TodoFilter = () => {
  const [position, setPosition] = React.useState("bottom")
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Button className="bg-primary-gradient">Filter</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Filter by priority</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">High</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Medium</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Low</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TodoFilter;

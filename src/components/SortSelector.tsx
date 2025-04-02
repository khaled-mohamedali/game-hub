import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectedOrder: (order: string) => void;
  sortOrder: string;
}
const SortSelector = ({ onSelectedOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-release", label: "Release Date" },
    { value: "-metacritic", label: "Pupolarity" },
    { value: "-rating", label: "Average rating" },
  ];

  const sortLabel = sortOrders.find((order) => order.value == sortOrder);

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          <BsChevronDown />
          Order By: {sortLabel?.label || "Relevance"}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((order) => (
              <Menu.Item
                key={order.value}
                value={order.value}
                onClick={() => onSelectedOrder(order.value)}
              >
                {order.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;

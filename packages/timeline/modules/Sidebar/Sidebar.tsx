import { useState } from "react";
import { Logo } from "../../components/Logo/Logo";
import { CategoriesSelector } from "./components/CategoriesSelector/CategoriesSelector";
import { Social } from "./components/Social/Social";
import { SidebarContainer } from "./styles";

/**
 * Main sidebar with Logo and Checkbox filtering categories.
 *
 * On mobile, this sidebar becomes a header.
 */
export const Sidebar = () => {
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([
    "champions",
    "changes",
    "pbe",
    "release",
    "skins",
    "rumor",
  ]);

  function handleChange(category: Category) {
    if (selectedCategories.includes(category)) {
      const newArr = [...selectedCategories].filter((cat) => cat !== category);
      setSelectedCategories(newArr);
    } else {
      setSelectedCategories((c) => [...c, category]);
    }
  }

  return (
    <SidebarContainer>
      <Logo width="48" />
      <CategoriesSelector
        categories={[
          { value: "skins", label: "Skins" },
          { value: "changes", label: "Balanceamento" },
          { value: "champions", label: "Campeões" },
          { value: "pbe", label: "PBE" },
          { value: "release", label: "Release" },
          { value: "rumor", label: "Rumor" },
        ]}
        handleCategoryClick={handleChange}
        selectedCategories={selectedCategories}
      />
      <Social />
    </SidebarContainer>
  );
};

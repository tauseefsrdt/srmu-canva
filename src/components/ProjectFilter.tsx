import React from 'react';
import { ProjectCategory } from '../types';
import { projectCategories } from '../data/projects';

interface ProjectFilterProps {
  activeCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="w-full overflow-x-auto no-scrollbar py-2">
      <div className="flex items-center gap-2 md:gap-3 min-w-max justify-start md:justify-center">
        {projectCategories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 select-none ${
                isActive
                  ? 'bg-[#FF3154] text-white shadow-[0_0_20px_rgba(255,49,84,0.5)] border border-[#FF3154]'
                  : 'bg-[#0D1014] text-[#9A9DA7] hover:text-white border border-white/10 hover:border-white/20 hover:bg-[#151920]'
              }`}
              data-cursor="pointer"
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

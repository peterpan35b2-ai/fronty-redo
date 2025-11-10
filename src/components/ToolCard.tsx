import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ToolCardProps {
  title: string;
  description: string;
  url: string;
  icon: LucideIcon;
  category: string;
}

export const ToolCard = ({ title, description, url, icon: Icon, category }: ToolCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card-hover animate-fade-in">
      <div className="absolute inset-0 gradient-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-6 flex flex-col h-full">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <span className="inline-block px-2 py-1 text-xs rounded-md bg-accent/20 text-accent mb-2">
              {category}
            </span>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground flex-grow mb-4 line-clamp-3">
          {description}
        </p>
        
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 group-hover:gap-3 font-medium"
        >
          Dùng ngay
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </Card>
  );
};

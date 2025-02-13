export interface ArticleCardProps {
    category: string;
    title: string;
    description: string;
    imageUrl: string;
    iconUrl: string;
  }
  
  export interface CategoryCardProps {
    title: string;
    description: string;
    iconUrl: string;
    backgroundColor: string;
    href: string;
    className?: string;
  }
  
  export interface CategoryLinkProps {
    name: string;
    slug: string;
    mobile?: boolean;
  }
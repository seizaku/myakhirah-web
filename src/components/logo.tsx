import { SITE_CONFIG } from "@/config/site-config";

interface Logo {
  className: string;
}

const Logo = ({ className }: Logo) => {
  return <div>{SITE_CONFIG.name}</div>;
};

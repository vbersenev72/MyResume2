import React, { AnchorHTMLAttributes, MouseEvent, useCallback } from 'react';
import useNavigate from '@/hooks/useNavigate';

interface ILink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const Link: React.FC<ILink> = ({
  href,
  children,
  onClick = () => {},
  ...props
}) => {
  const navigate = useNavigate();

  const onLinkClick = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(href);
    onClick(e);
  }, []);

  return (
    <a onClick={onLinkClick} {...props}>
      {children}
    </a>
  );
};

export default Link;

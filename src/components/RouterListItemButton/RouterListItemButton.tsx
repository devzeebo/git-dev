/* eslint-disable react/display-name -- forward ref */
import type { ListItemButtonProps, ListItemTextProps } from '@mui/material';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import type { ComponentType } from 'react';
import React from 'react';
import { NavLinkProps, NavLink } from 'react-router-dom';

export type RouterListItemButtonProps = {
  to: string,
  ListItemTextProps: ListItemTextProps,
  Icon: ComponentType
} & ListItemButtonProps;

const RouterListItemButton = ({
  to,
  ListItemTextProps,
  Icon,
  ...props
}: RouterListItemButtonProps) => {
  const BoundNavLink = React.useMemo(
    () => (
      // eslint-disable-next-line react/no-unstable-nested-components -- memo
      ({
        className: previousClasses,
        ...rest
      }: any) => {
        const elementClasses = previousClasses?.toString() ?? '';

        return (
          <NavLink
            {...rest}
            end
            to={to}
            className={({ isActive }) => (isActive ? `${elementClasses} Mui-selected` : elementClasses)}
          />
        );
      }),
    [to],
  );

  return (
    <ListItemButton
      component={BoundNavLink}
      {...props}
      sx={{ width: 300 }}
    >
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText {...ListItemTextProps} />
    </ListItemButton>
  );
};

export default RouterListItemButton;

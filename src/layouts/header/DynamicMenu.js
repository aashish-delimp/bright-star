import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li
      className={`menu-item ${item.classes} ${item.hasChildren ? 'menu-item-has-children' : ''} ${isOpen ? 'submenu-open' : ''}`}
      id={`menu-item-${item.id}`}
    >
      {item.hasChildren ? (
        <>
          <span onClick={toggleSubMenu}>{item.title}</span>
          <ul className="sub-menu " style={{ display: isOpen ? 'block' : 'none' }}>
            {item.children.map((child) => (
              <MenuItem key={child.id} item={child} />
            ))}
          </ul>
          <span className="menu-toggle" onClick={toggleSubMenu}></span>
        </>
      ) : (
        <Link to={item.link} onClick={toggleSubMenu}>
          {item.title}
        </Link>
      )}
    </li>
  );
};

const Menu = ({ menuItems }) => {
  return (
    <ul id="menu-main-menu" className="menu menu-main">
      {menuItems.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const DynamicMenu = () => {
  const menuItems = [
    {
      id: 1,
      title: 'About Us',
      link: '/about-us',
      classes: 'menu-item-type-post_type menu-item-object-page',
      hasChildren: true,
      children: [
        {
          id: 1.1,
          title: 'Meet the Teachers',
          link: '/about-us/meet-the-teachers',
          classes: 'menu-item-type-post_type menu-item-object-page'
        },
        {
          id: 1.2,
          title: 'Meet the Leadership',
          link: '/about-us/meet-the-leadership',
          classes: 'menu-item-type-post_type menu-item-object-page'
        },
        {
          id: 1.3,
          title: 'Testimonials',
          link: '/about-us/testimonials',
          classes: 'menu-item-type-post_type menu-item-object-page last-item'
        }
      ]
    },
    {
      id: 2,
      title: 'Christian Schools',
      link: '/christian-schools',
      classes: 'menu-item-type-post_type menu-item-object-page',
      hasChildren: true,
      children: [
        {
          id: 2.1,
          title: 'Virtual Enrollment',
          link: '/christian-schools/virtual-enrollment',
          classes: 'menu-item-type-post_type menu-item-object-page'
        },
        {
          id: 2.2,
          title: 'Filling Teacher Vacancies',
          link: '/christian-schools/filling-teacher-vacancies',
          classes: 'menu-item-type-post_type menu-item-object-page last-item'
        }
      ]
    },
    {
        id: 3,
        title: 'Christian Schools',
        link: '/christian-schools',
        classes: 'menu-item-type-post_type menu-item-object-page',
        hasChildren: true,
        children: [
          {
            id: 3.1,
            title: 'Virtual Enrollment',
            link: '/christian-schools/virtual-enrollment',
            classes: 'menu-item-type-post_type menu-item-object-page'
          },
          {
            id: 3.2,
            title: 'Filling Teacher Vacancies',
            link: '/christian-schools/filling-teacher-vacancies',
            classes: 'menu-item-type-post_type menu-item-object-page last-item'
          }
        ]
      },
    // Add other menu items here...
  ];

  return <Menu menuItems={menuItems} />;
};

export default DynamicMenu;

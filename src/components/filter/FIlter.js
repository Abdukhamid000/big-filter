import React, { useState } from "react";

import classes from "../../app.module.css";
import FIlterForm from "../FIlterForm";

const Filter = (props) => {
  const [transformedNav, setTransformedNav] = useState(props.data);

  const manage = (parent, child) => {
    const arr = [...transformedNav];

    arr[parent].children[child].isChecked =
      !arr[parent].children[child].isChecked;

    setTransformedNav(arr);
  };

  const clearAllFields = () => {
    const arr = [...transformedNav];

    arr.map((item) => {
      return {
        ...item,
        children: item.children.map((item2) => {
          return {
            ...item2,
            isChecked: (item2.isChecked = false),
          };
        }),
      };
    });

    setTransformedNav(arr);
    console.log(transformedNav);
  };

  const toggle = (id) => {
    setTransformedNav(
      transformedNav.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isVisible: !item.isVisible,
          };
        }

        return item;
      })
    );
  };

  return (
    <>
      {transformedNav.map(({ id, title, isVisible, children }, index) => (
        <div key={id}>
          <span onClick={() => toggle(id)}>{title}</span>
          <ul className={isVisible ? classes.show : classes.hide}>
            {children.map(({ id, label, type, isChecked }, idx) => (
              <li key={id}>
                <input
                  type={type}
                  checked={isChecked}
                  onChange={() => manage(index, idx)}
                  value={label}
                />
                {label}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <FIlterForm
        transformedNav={transformedNav}
        clearAllFields={clearAllFields}
      />
    </>
  );
};

export default Filter;

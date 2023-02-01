export function Simple() {
  return (
    <div>
      <hr /> fun(1): this is simple function{" "}
    </div>
  );
}

export const Var_function = () => {
  return (
    <>
      <hr /> fun(2): this is var function
    </>
  );
};

export function Use_varfunction() {
  return (
    <div>
      <hr />
      <p>fun(3) we are using fun2 in next line {Var_function()}</p>
    </div>
  );
}
export const Get_value = (prop) => {
  return (
    <div>
      <hr />
      <p>fun(4) your name is :{prop.your_name}</p>
    </div>
  );
};

export const Has_Child = (prop) => {
  return (
    <div>
      <p>fun(5) in this function we have child</p>
      <span>this is start of child</span>
      {prop.children}
      <span> this is end of child</span>
    </div>
  );
};

export const Use_child = () => {
  return (
    <div>
      <hr />
      <p>we call child</p>
      <Has_Child>
        <p>this is parent</p>
      </Has_Child>
    </div>
  );
};

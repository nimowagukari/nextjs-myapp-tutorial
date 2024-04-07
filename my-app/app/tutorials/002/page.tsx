function MyButton() {
  return <button className="border-4 border-black">I'm a button</button>;
}

export default function Page() {
  return (
    <>
      <h1>Single Button</h1>
      <MyButton />
    </>
  );
}

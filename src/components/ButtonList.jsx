import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Cricket",
  "Cooking",
  "Entertainment",
  "News",
  "Movies",
  "Podcasts",
  "Shopping",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((name, index) => {
        return <Button key={index} name={name} />;
      })}
    </div>
  );
};
export default ButtonList;

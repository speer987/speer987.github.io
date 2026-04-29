type props = {
  desc: string;
};

export default function InfoList({ desc }: props) {
  return <p>{desc}</p>;
}

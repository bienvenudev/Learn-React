import Markdown from "react-markdown";

export default function ClaudeRecipe(props) {
  const recipe = <Markdown>{props.recipe}</Markdown>;

  return <section className="suggested-recipe-container">{recipe}</section>;
}

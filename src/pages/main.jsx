import { Header } from "@/components/models/header/header";
import { Acquaintance } from "@/components/models/acquaintance";
import { Writing } from "@/components/models/writing";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./main.module.css";

const markdown = `Here is some JavaScript code:

~~~js
element.addEventListener(eventName, listener, options)
element.addEventListener(eventName, listener, options)
element.addEventListener(eventName, listener, options)
element.addEventListener(eventName, listener, options)
~~~
`;

export const MainPage = () => {
  return (
    <>
      <Header />
      <section className="container">
        <Markdown
          children={markdown}
          components={{
            code(props) {
              const { children, className, node, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter
                  {...rest}
                  PreTag="div"
                  className={`${styles.codeForm} rounded-[.5rem] max-w-[746px]`}
                  showLineNumbers={true}
                  language={match[1]}
                  style={prism}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },
          }}
        />
        <Acquaintance />
        <hr />
        <Writing />
        <hr />
      </section>
    </>
  );
};
import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import fm from "front-matter";
import Layout2 from "../components/Layout/Layout2";
import { Link } from "react-router-dom/cjs/react-router-dom";
import LoadingScreen from "../components/Loading/LoadingScreen";

function WorkDetails2(props) {
  const [meta, setMeta] = useState("");
  const [content, setContent] = useState("");
  const title = props.match.params.title;
  const [isloading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    import(`../works/${title}.md`)
      .then((res) => res.default)
      .then((res) => {
        fetch(res)
          .then((data) => data.text())
          .then((res) => {
            let result = fm(res);
            setMeta(result.attributes);
            setContent(result.body);
          });
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [title]);

  return (
    <Layout2>
      {isloading ? (
        <LoadingScreen />
      ) : (
        <section className="shadow-blue white-bg padding mt-0">
          <ul className="list-inline portfolio-info mt-0">
            <li className="list-inline-item">
              <i className="icon-user"></i>
              {meta.author}
            </li>
            <li className="list-inline-item">
              <i className="icon-calendar"></i>
              {meta.date}
            </li>
            <li className="list-inline-item">
              <Link
                to={{ pathname: meta?.link }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-link"></i> {meta && meta.title}
              </Link>
            </li>
          </ul>
          <Markdown children={content}></Markdown>
          <ul className="list-unstyled d-flex">
            {meta?.technologies?.map((el) => (
              <li className="btn btn-default btn-lg mr-3 technologies">{el}</li>
            ))}
          </ul>
        </section>
      )}
    </Layout2>
  );
}

export default WorkDetails2;

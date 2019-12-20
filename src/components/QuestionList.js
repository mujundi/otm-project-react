import React, { useEffect, useState } from "react";
import Question from "./Question";
import axios from "axios";
import Async from "react-async";

const API_URL = "https://otm-dispatch-strapi.herokuapp.com";

const url = `${API_URL}/help-pages`;

export default function QuestionList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data[0].FAQs));
  }, []);

  return (
    <section
      className="accordion-section clearfix mt-3"
      aria-label="Question Accordions"
    >
      <div className="container text-muted">
        <div
          className="panel-group"
          id="accordion"
          role="tablist"
          aria-multiselectable="false"
        >
          <ul className="pt-4">
            {data.map((question, index) => (
              <li key={index}>
                <Question
                  id={question._id}
                  question={question.Question}
                  answer={question.Answer}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

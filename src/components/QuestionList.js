import React, { useEffect, useState } from "react";
import Question from "./Question";
import axios from "axios";
import Async from "react-async";

const API_URL = "http://167.114.153.121:1337";

const url = `${API_URL}/pages/5dff3bdaaecfad34d76ee5a5`;

export default function QuestionList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data.fields[0].question));
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
                  question={question.question}
                  answer={question.answer}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

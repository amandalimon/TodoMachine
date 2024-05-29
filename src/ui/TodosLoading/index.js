import React from 'react';
import './TodosLoading.css'

function TodosLoading() {
  return (
    <>
      <div className="LoadingTodo-container">
        <span className="LoadingTodo-CompleteIcon"></span>
        <p className="LoadingTodo-text"></p>
        <span className="LoadingTodo-DeleteIcon"></span>
      </div>
      <div className="LoadingTodo-container">
        <span className="LoadingTodo-CompleteIcon"></span>
        <p className="LoadingTodo-text"></p>
        <span className="LoadingTodo-DeleteIcon"></span>
      </div> <div className="LoadingTodo-container">
        <span className="LoadingTodo-CompleteIcon"></span>
        <p className="LoadingTodo-text"></p>
        <span className="LoadingTodo-DeleteIcon"></span>
      </div>
    </>
  );
}

export { TodosLoading };
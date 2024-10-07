'use client'
import { useState } from "react";
import { Todolist } from "../components/component/todolist";

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  return (
    <>
      <Todolist></Todolist>
      <div>

      </div>
    </>
  )
}

/* eslint-disable camelcase */
export function dataSelector(data) {
  const { tasks, total_task_count } = data;
  const filtered = tasks.map((el) => ({
    email: el.email,
    id: el.id,
    image_path: el.image_path,
    status: el.status,
    description: el.text,
    username: el.username
  }));
  return { data: filtered, total: parseInt(total_task_count, 10) };
}

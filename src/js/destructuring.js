export default function destructuring({ special }) {
  const result = [];
  for (const item of special) {
    const {
      id,
      name,
      description = 'Описание недоступно',
      icon,
    } = item;
    result.push({
      id,
      name,
      description,
      icon,
    });
  }
  return result;
}

import db, {FindManyProjectArgs} from 'db'

export default async function getProjects(args: FindManyProjectArgs) {
  const projects = await db.project.findMany(args)

  return projects
}

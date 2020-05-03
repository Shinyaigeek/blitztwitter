import db, {ProjectDeleteArgs} from 'db'

export default async function deleteProject(args: ProjectDeleteArgs) {
  const project = await db.project.delete(args)

  return project
}

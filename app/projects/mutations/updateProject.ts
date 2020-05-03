import db, {ProjectUpdateArgs} from 'db'

export default async function updateProject(args: ProjectUpdateArgs) {
  // Don't allow updating ID
  delete args.data.id

  const project = await db.project.update(args)

  return project
}

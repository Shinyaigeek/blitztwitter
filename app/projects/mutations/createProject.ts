import db, { ProjectCreateArgs } from 'db'

export default async function createProject(args: ProjectCreateArgs) {
  const project = await db.project.create(args)

  return project
}

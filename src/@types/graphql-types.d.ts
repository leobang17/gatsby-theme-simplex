import { Node } from 'gatsby'

export type AllQuery<Type extends string, N extends Node> = {
  [key in Type]: {
    nodes: N[]
  }
}

export type SingleQuery<Type extends string, N extends Node> = {
  [key in Type]: N
}

export type FileNode = Node & {
  name: string
  publicURL: string
  extension: string
}

export type AllFileQuery = AllQuery<'allFile', FileNode>

export type FileQuery = SingleQuery<'file', FileNode>

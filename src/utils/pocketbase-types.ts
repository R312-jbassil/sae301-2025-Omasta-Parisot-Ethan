/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Users = "users",
	Lunettes = "lunettes",
	Commandes = "commandes",
	Materiaux = "materiaux",
	Couleurs = "couleurs",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

type ExpandType<T> = unknown extends T
	? T extends unknown
		? { expand?: unknown }
		: { expand: T }
	: { expand: T }

// System fields
export type BaseSystemFields<T = unknown> = {
	id: RecordIdString
	collectionId: string
	collectionName: Collections
} & ExpandType<T>

export type AuthSystemFields<T = unknown> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

/* =======================
   RECORD TYPES
======================= */

// --- Users ---
export type UsersRecord = {
	nom: string
	prenom: string
	email: string
	lunettes_crees?: RecordIdString[]
	commandes?: RecordIdString[]
}

// --- Lunettes ---
export type LunettesRecord = {
	nom_modele: string
	svg_code?: string
	largeur_pont?: number
	taille_verre?: number
	couleur_monture?: string
	createur?: RecordIdString
	commandes?: RecordIdString[]
	materiaux_monture?: RecordIdString[]
	materiaux_branche?: RecordIdString[]
	couleurs_monture?: RecordIdString[]
	couleurs_branche?: RecordIdString[]
}

// --- Commandes ---
export type CommandesRecord = {
	date_commande?: IsoDateString
	statut?: string
	prix_total?: number
	acheteur?: RecordIdString
	lunettes?: RecordIdString[]
}

// --- Matériaux ---
export type MateriauxRecord = {
	libelle: string
	origine?: string
	lunettes_materiau?: RecordIdString[]
}

// --- Couleurs ---
export type CouleursRecord = {
	libelle: string
	lunettes_monture?: RecordIdString[]
	lunettes_branche?: RecordIdString[]
}

/* =======================
   RESPONSE TYPES
======================= */

export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>
export type LunettesResponse<Texpand = unknown> = Required<LunettesRecord> & BaseSystemFields<Texpand>
export type CommandesResponse<Texpand = unknown> = Required<CommandesRecord> & BaseSystemFields<Texpand>
export type MateriauxResponse<Texpand = unknown> = Required<MateriauxRecord> & BaseSystemFields<Texpand>
export type CouleursResponse<Texpand = unknown> = Required<CouleursRecord> & BaseSystemFields<Texpand>

/* =======================
   COLLECTIONS RECORDS
======================= */

export type CollectionRecords = {
	users: UsersRecord
	lunettes: LunettesRecord
	commandes: CommandesRecord
	materiaux: MateriauxRecord
	couleurs: CouleursRecord
}

export type CollectionResponses = {
	users: UsersResponse
	lunettes: LunettesResponse
	commandes: CommandesResponse
	materiaux: MateriauxResponse
	couleurs: CouleursResponse
}

/* =======================
   TYPED POCKETBASE CLIENT
======================= */

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'users'): RecordService<UsersResponse>
	collection(idOrName: 'lunettes'): RecordService<LunettesResponse>
	collection(idOrName: 'commandes'): RecordService<CommandesResponse>
	collection(idOrName: 'materiaux'): RecordService<MateriauxResponse>
	collection(idOrName: 'couleurs'): RecordService<CouleursResponse>
}
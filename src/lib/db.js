import clientPromise from './mongodb.js'
import { ObjectId } from 'mongodb'

// Database helper functions
export async function getDb() {
  const client = await clientPromise
  return client.db('productstore')
}

// User operations
export async function createUser(userData) {
  const db = await getDb()
  const result = await db.collection('users').insertOne({
    ...userData,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  return { _id: result.insertedId, ...userData }
}

export async function findUserByEmail(email) {
  const db = await getDb()
  return await db.collection('users').findOne({ email })
}

export async function findUserById(id) {
  const db = await getDb()
  return await db.collection('users').findOne({ _id: new ObjectId(id) })
}

// Product operations
export async function createProduct(productData) {
  const db = await getDb()
  const result = await db.collection('products').insertOne({
    ...productData,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  return { _id: result.insertedId, ...productData }
}

export async function getAllProducts() {
  const db = await getDb()
  const products = await db.collection('products').find({}).sort({ createdAt: -1 }).toArray()
  return products
}

export async function getProductById(id) {
  const db = await getDb()
  return await db.collection('products').findOne({ _id: new ObjectId(id) })
}

export async function getProductsByUserId(userId) {
  const db = await getDb()
  const products = await db.collection('products').find({ userId }).sort({ createdAt: -1 }).toArray()
  return products
}

// NextAuth session operations
export async function createSession(sessionData) {
  const db = await getDb()
  const result = await db.collection('sessions').insertOne({
    ...sessionData,
    createdAt: new Date()
  })
  return { _id: result.insertedId, ...sessionData }
}

export async function findSession(sessionToken) {
  const db = await getDb()
  return await db.collection('sessions').findOne({ sessionToken })
}

export async function updateSession(sessionToken, updateData) {
  const db = await getDb()
  const result = await db.collection('sessions').updateOne(
    { sessionToken },
    { $set: { ...updateData, updatedAt: new Date() } }
  )
  return result.modifiedCount > 0
}

export async function deleteSession(sessionToken) {
  const db = await getDb()
  const result = await db.collection('sessions').deleteOne({ sessionToken })
  return result.deletedCount > 0
}

// Account operations for OAuth
export async function createAccount(accountData) {
  const db = await getDb()
  const result = await db.collection('accounts').insertOne({
    ...accountData,
    createdAt: new Date()
  })
  return { _id: result.insertedId, ...accountData }
}

export async function findAccount(provider, providerAccountId) {
  const db = await getDb()
  return await db.collection('accounts').findOne({ provider, providerAccountId })
}

export async function deleteAccountsByUserId(userId) {
  const db = await getDb()
  const result = await db.collection('accounts').deleteMany({ userId })
  return result.deletedCount
}

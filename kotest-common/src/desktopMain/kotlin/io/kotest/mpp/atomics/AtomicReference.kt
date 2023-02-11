package io.kotest.mpp.atomics

import kotlin.native.concurrent.FreezableAtomicReference
import kotlin.native.concurrent.freeze
import kotlin.native.concurrent.isFrozen

actual class AtomicReference<T> actual constructor(initialValue: T) {

   private val delegate = AtomicReference(initialValue)

   actual var value: T
      get() = delegate.value
      set(value) {
         delegate.value = value
      }

   actual fun compareAndSet(expectedValue: T, newValue: T): Boolean =
      delegate.compareAndSet(expectedValue, newValue)
}

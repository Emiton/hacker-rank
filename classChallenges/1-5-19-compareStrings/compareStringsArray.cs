using System;
using System.Collections.Generic;

class MainClass
{
  public static void Main (string[] args)
  {
    List<int> difference = new List<int>();
    difference.AddRange(characterDifference("abcde", "edcba"));
    Console.WriteLine(difference.Count);

    // Print all values 
    foreach (int diff in difference) {
      Console.Write(diff);
      Console.Write(" ");
    }
  }

  /*
  Purpose: Checks the difference between two strings.
  Returns: Returns a list with the difference between the characters in each string
           at the i-th position
  */
  public static List<int> characterDifference (string string1, string string2)
  {
    List<int> difference = new List<int>();

    // Check Length
    if(string1.Length != string2.Length) {
      Console.WriteLine("Both strings are must be equal!");
      return difference;
    }

    // Check all chars
    for(int i = 0; i < string1.Length; i++) {
      difference.Add(string2[i] - string1[i]);
    }

    return difference;
  }

}

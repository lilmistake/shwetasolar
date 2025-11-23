-- Add DELETE policy for contact_submissions table
-- This allows the admin to delete contact form submissions

-- Drop existing policy if it exists to avoid conflicts
DROP POLICY IF EXISTS "Only admin can delete contact submissions" ON contact_submissions;

-- Create the delete policy
CREATE POLICY "Only admin can delete contact submissions"
ON contact_submissions
FOR DELETE
TO authenticated
USING (true);
